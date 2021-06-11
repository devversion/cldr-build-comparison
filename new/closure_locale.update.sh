#!/usr/bin/env bash
# Copyright 2017 The Bazel Authors. All rights reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# --- begin runfiles.bash initialization v2 ---
# Copy-pasted from the Bazel Bash runfiles library v2.
set -uo pipefail; f=build_bazel_rules_nodejs/third_party/github.com/bazelbuild/bazel/tools/bash/runfiles/runfiles.bash
source "${RUNFILES_DIR:-/dev/null}/$f" 2>/dev/null || \
  source "$(grep -sm1 "^$f " "${RUNFILES_MANIFEST_FILE:-/dev/null}" | cut -f2- -d' ')" 2>/dev/null || \
  source "$0.runfiles/$f" 2>/dev/null || \
  source "$(grep -sm1 "^$f " "$0.runfiles_manifest" | cut -f2- -d' ')" 2>/dev/null || \
  source "$(grep -sm1 "^$f " "$0.exe.runfiles_manifest" | cut -f2- -d' ')" 2>/dev/null || \
  { echo>&2 "ERROR: cannot find $f"; exit 1; }; f=; set -e
# --- end runfiles.bash initialization v2 ---

# --- begin RUNFILES initialization ---
# Find our runfiles as ${PWD}/${RUNFILES_DIR} is not always correct.
# We need this to launch node with the correct entry point.
#
# Call this program X. X was generated by a genrule and may be invoked
# in many ways:
#   1a) directly by a user, with $0 in the output tree
#   1b) via 'bazel run' (similar to case 1a)
#   2) directly by a user, with $0 in X's runfiles
#   3) by another program Y which has a data dependency on X, with $0 in Y's
#      runfiles
#   4a) via 'bazel test'
#   4b) case 3 in the context of a test
#   5a) by a genrule cmd, with $0 in the output tree
#   6a) case 3 in the context of a genrule
#
# For case 1, $0 will be a regular file, and the runfiles will be
# at $0.runfiles.
# For case 2 or 3, $0 will be a symlink to the file seen in case 1.
# For case 4, $TEST_SRCDIR should already be set to the runfiles by
# blaze.
# Case 5a is handled like case 1.
# Case 6a is handled like case 3.
if [[ -n "${RUNFILES_MANIFEST_ONLY:-}" ]]; then
  # Windows only has a manifest file instead of symlinks.
  RUNFILES=${RUNFILES_MANIFEST_FILE%/MANIFEST}
elif [[ -n "${TEST_SRCDIR:-}" ]]; then
  # Case 4, bazel has identified runfiles for us.
  RUNFILES="${TEST_SRCDIR:-}"
else
  case "$0" in
  /*) self="$0" ;;
  *) self="$PWD/$0" ;;
  esac
  while true; do
    if [[ -e "$self.runfiles" ]]; then
      RUNFILES="$self.runfiles"
      break
    fi

    if [[ $self == *.runfiles/* ]]; then
      RUNFILES="${self%%.runfiles/*}.runfiles"
      # don't break; this is a last resort for case 6b
    fi

    if [[ ! -L "$self" ]]; then
      break;
    fi

    readlink="$(readlink "$self")"
    if [[ "$readlink" = /* ]]; then
      self="$readlink"
    else
      # resolve relative symlink
      self="${self%%/*}/$readlink"
    fi
  done

  if [[ -z "$RUNFILES" ]]; then
    echo " >>>> FAIL: RUNFILES environment variable is not set. <<<<" >&2
    exit 1
  fi
fi
export RUNFILES
# --- end RUNFILES initialization ---

export BAZEL_TARGET=//packages/common/locales:closure_locale.update
export BAZEL_WORKSPACE=angular
if [[ -z "${BAZEL_NODE_MODULES_ROOTS:-}" ]]; then
  export BAZEL_NODE_MODULES_ROOTS=
fi


# Note: for debugging it is useful to see what files are actually present
# This redirects to stderr so it doesn't interfere with Bazel's worker protocol
# find . -name thingImLookingFor 1>&2

readonly vendored_node=""

if [ -n "${vendored_node}" ]; then
  # Use the vendored node path
  readonly node=$(rlocation "${vendored_node}")

  if [ ! -f "${node}" ]; then
      printf "\n>>>> FAIL: The vendored node binary '${vendored_node}' not found in runfiles. <<<<\n\n" >&2
      exit 1
  fi
else
  # Check environment for which node path to use
  unameOs="$(uname -s)"
  unameArch="$(uname -m)"
  case "${unameOs}" in
      Linux*)     machine=linux ;;
      Darwin*)    machine=darwin ;;
      CYGWIN*)    machine=windows ;;
      MINGW*)     machine=windows ;;
      MSYS_NT*)   machine=windows ;;
      *)          machine=linux
                  printf "\nUnrecongized uname '${unameOs}'; defaulting to use node for linux.\n" >&2
                  printf "Please file an issue to https://github.com/bazelbuild/rules_nodejs/issues if \n" >&2
                  printf "you would like to add your platform to the supported rules_nodejs node platforms.\n\n" >&2
                  ;;
  esac

  case "${machine}" in
    # The following paths must match up with _download_node in node_repositories
    darwin) readonly node_toolchain="nodejs_darwin_amd64/bin/nodejs/bin/node" ;;
    windows) readonly node_toolchain="nodejs_windows_amd64/bin/nodejs/node.exe" ;;
    *)
      case "${unameArch}" in
        aarch64*) readonly node_toolchain="nodejs_linux_arm64/bin/nodejs/bin/node" ;;
        s390x*) readonly node_toolchain="nodejs_linux_s390x/bin/nodejs/bin/node" ;;
        *) readonly node_toolchain="nodejs_linux_amd64/bin/nodejs/bin/node" ;;
      esac
      ;;
  esac

  readonly node=$(rlocation "${node_toolchain}")

  if [ ! -f "${node}" ]; then
      printf "\n>>>> FAIL: The node binary '${node_toolchain}' not found in runfiles.\n" >&2
      printf "This node toolchain was chosen based on your uname '${unameOs} ${unameArch}'.\n" >&2
      printf "Please file an issue to https://github.com/bazelbuild/rules_nodejs/issues if \n" >&2
      printf "you would like to add your platform to the supported rules_nodejs node platforms. <<<<\n\n" >&2
      exit 1
  fi
fi

# Export the location of the runfiles helpers script
export BAZEL_NODE_RUNFILES_HELPER=$(rlocation "build_bazel_rules_nodejs/internal/runfiles/runfile_helper_main.js")
# Paths can be with lower and upper case on windows because of the msys64 package in the powershell
# https://regex101.com/r/c0Gjn8/1/
if [[ "${BAZEL_NODE_RUNFILES_HELPER}" != /* ]] && [[ ! "${BAZEL_NODE_RUNFILES_HELPER}" =~ ^[A-Za-z]:[\/\\] ]]; then
  export BAZEL_NODE_RUNFILES_HELPER=$(pwd)/${BAZEL_NODE_RUNFILES_HELPER}
fi

# Export the location of the require patch script as it can be used to bootstrap
# node require patch if needed
export BAZEL_NODE_PATCH_REQUIRE=$(rlocation "angular/packages/common/locales/closure_locale.update_require_patch.js")
# Paths can be with lower and upper case on windows because of the msys64 package in the powershell
# https://regex101.com/r/c0Gjn8/1/
if [[ "${BAZEL_NODE_PATCH_REQUIRE}" != /* ]] && [[ ! "${BAZEL_NODE_PATCH_REQUIRE}" =~ ^[A-Za-z]:[\/\\] ]]; then
  export BAZEL_NODE_PATCH_REQUIRE=$(pwd)/${BAZEL_NODE_PATCH_REQUIRE}
fi

readonly repository_args=$(rlocation "nodejs_windows_amd64/bin/node_repo_args.sh")
readonly lcov_merger_script=$(rlocation "build_bazel_rules_nodejs/internal/coverage/lcov_merger-js.js")

source $repository_args

ARGS=()
LAUNCHER_NODE_OPTIONS=($NODE_REPOSITORY_ARGS)
USER_NODE_OPTIONS=()
ALL_ARGS=(--out packages/common/locales/closure-locale.ts packages/common/locales/closure-locale.ts packages/common/locales/closure_locales_generated.ts "$@")
STDOUT_CAPTURE=""
STDERR_CAPTURE=""
EXIT_CODE_CAPTURE=""
NODE_WORKING_DIR=""

RUN_LINKER=true
NODE_PATCHES=true
PATCH_REQUIRE=false
FROM_EXECROOT=false
for ARG in ${ALL_ARGS[@]+"${ALL_ARGS[@]}"}; do
  case "$ARG" in
    # Supply custom linker arguments for first-party dependencies
    --bazel_node_modules_manifest=*) MODULES_MANIFEST="${ARG#--bazel_node_modules_manifest=}" ;;
    # Captures stdout of the node process to the file specified
    --bazel_capture_stdout=*) STDOUT_CAPTURE="${ARG#--bazel_capture_stdout=}" ;;
    # Captures stderr of the node process to the file specified
    --bazel_capture_stderr=*) STDERR_CAPTURE="${ARG#--bazel_capture_stderr=}" ;;
    # Captures the exit code of the node process to the file specified
    --bazel_capture_exit_code=*) EXIT_CODE_CAPTURE="${ARG#--bazel_capture_exit_code=}" ;;
    # Disable the node_loader.js monkey patches for require()
    # Note that this means you need an explicit runfiles helper library
    # This flag is now a no-op since the default is also false
    --nobazel_patch_module_resolver) PATCH_REQUIRE=false ;;
    # Enable the node_loader.js monkey patches for require()
    --bazel_patch_module_resolver) PATCH_REQUIRE=true ;;
    # Disable the --require node-patches (undocumented and unused; only here as an escape value)
    --nobazel_node_patches) NODE_PATCHES=false ;;
    # Disable the linker pre-process (undocumented and unused; only here as an escape value)
    # It also enables the --bazel_patch_module_resolver flag, as either the linker or require() patch
    # is needed for resolving third-party node modules.
    --nobazel_run_linker) RUN_LINKER=false PATCH_REQUIRE=true ;;
    # If running an NPM package, run it from execroot instead of from external
    --bazel_run_from_execroot) FROM_EXECROOT=true ;;
    --bazel_node_working_dir=*) NODE_WORKING_DIR="${ARG#--bazel_node_working_dir=}" ;;
    # Let users pass through arguments to node itself
    --node_options=*) USER_NODE_OPTIONS+=( "${ARG#--node_options=}" ) ;;
    # Remaining argv is collected to pass to the program
    *) ARGS+=( "$ARG" )
  esac
done

# Link the first-party modules into node_modules directory before running the actual program
if [ "$RUN_LINKER" = true ]; then
  link_modules_script=$(rlocation "build_bazel_rules_nodejs/internal/linker/index.js")
  # For programs which are called with bazel run or bazel test, there will be no additional runtime
  # dependencies to link, so we use the default modules_manifest which has only the static dependencies
  # of the binary itself.
  MODULES_MANIFEST=${MODULES_MANIFEST:-$(rlocation "angular/packages/common/locales/_closure_locale.update.module_mappings.json")}
  "${node}" "${link_modules_script}" "${MODULES_MANIFEST:-}"
fi

if [ "$NODE_PATCHES" = true ]; then
  node_patches_script=$(rlocation "build_bazel_rules_nodejs/internal/node/node_patches.js")
  # Node's --require option assumes that a non-absolute path not starting with `.` is
  # a module, so that you can do --require=source-map-support/register
  # So if the require script is not absolute, we must make it so
  case "${node_patches_script}" in
    # Absolute path on unix
    /*          ) ;;
    # Absolute path on Windows, e.g. C:/path/to/thing
    [a-zA-Z]:/* ) ;;
    # Otherwise it needs to be made relative
    *           ) node_patches_script="${PWD}/${node_patches_script}" ;;
  esac
  LAUNCHER_NODE_OPTIONS+=( "--require" "$node_patches_script" )
fi

# Find the execroot
if [[ "$PWD" == *"/bazel-out/"* ]]; then
  # We in runfiles, find the execroot.
  # Look for `bazel-out` which is used to determine the the path to `execroot/my_wksp`. This works in
  # all cases including on rbe where the execroot is a path such as `/b/f/w`. For example, when in
  # runfiles on rbe, bazel runs the process in a directory such as
  # `/b/f/w/bazel-out/k8-fastbuild/bin/path/to/pkg/some_test.sh.runfiles/my_wksp`. From here we can
  # determine the execroot `b/f/w` by finding the first instance of bazel-out.
  readonly bazel_out="/bazel-out/"
  readonly rest=${PWD#*$bazel_out}
  readonly index=$(( ${#PWD} - ${#rest} - ${#bazel_out} ))
  if [[ ${index} < 0 ]]; then
    echo "No 'bazel-out' folder found in path '${PWD}'!" >&2
    exit 1
  fi
  EXECROOT=${PWD:0:${index}}
  RUNFILES_ROOT=$(dirname $PWD)
else
  # We are in execroot or in some other context all together such as a nodejs_image or a manually
  # run nodejs_binary. If this is execroot then linker node_modules is in the PWD. If this another
  # context then it is safe to assume the node_modules are there and guard that directory if it exists.
  EXECROOT=${PWD}
  RUNFILES_ROOT=
fi

# Tell the node_patches_script that programs should not escape the execroot
export BAZEL_PATCH_ROOTS="${EXECROOT}"
# Set all bazel managed node_modules directories as guarded so no symlinks may
# escape and no symlinks may enter.
# We always guard against the root node_modules where 1st party deps go.
# (e.g., /private/.../execroot/build_bazel_rules_nodejs/node_modules)
export BAZEL_PATCH_ROOTS="${BAZEL_PATCH_ROOTS},${EXECROOT}/node_modules"
if [[ "${RUNFILES_ROOT}" ]]; then
  # If in runfiles, guard the runfiles root itself
  export BAZEL_PATCH_ROOTS="${BAZEL_PATCH_ROOTS},${RUNFILES_ROOT}"
  # If in runfiles guard the node_modules location in runfiles as well
  # (e.g., /private/.../execroot/build_bazel_rules_nodejs/bazel-out/darwin-fastbuild/bin/internal/linker/test/multi_linker/test.sh.runfiles/build_bazel_rules_nodejs/node_modules)
  export BAZEL_PATCH_ROOTS="${BAZEL_PATCH_ROOTS},${RUNFILES_ROOT}/${BAZEL_WORKSPACE}/node_modules"
fi
if [[ -n "${BAZEL_NODE_MODULES_ROOTS:-}" ]]; then
  # BAZEL_NODE_MODULES_ROOTS is in the format "<path>:<workspace>,<path>:<workspace>"
  # (e.g., "internal/linker/test:npm_internal_linker_test,:npm")
  if [[ -n "${VERBOSE_LOGS:-}" ]]; then
    echo "BAZEL_NODE_MODULES_ROOTS=${BAZEL_NODE_MODULES_ROOTS}" >&2
  fi
  OLDIFS="${IFS}"
  IFS=","
  roots=(${BAZEL_NODE_MODULES_ROOTS})
  IFS="${OLDIFS}"
  for root in "${roots[@]}"; do
    if [[ "${root}" ]]; then
      OLDIFS="${IFS}"
      IFS=":"
      root_pair=(${root})
      IFS="${OLDIFS}"
      root_path="${root_pair[0]}"
      root_workspace="${root_pair[1]:-}"
      if [[ "${root_path}" ]]; then
        # Guard non-root node_modules as well
        # (e.g., /private/.../execroot/build_bazel_rules_nodejs/internal/linker/test/node_modules)
        export BAZEL_PATCH_ROOTS="${BAZEL_PATCH_ROOTS},${EXECROOT}/${root_path}/node_modules"
        if [[ "${RUNFILES_ROOT}" ]]; then
          # If in runfiles guard the node_modules location in runfiles as well
          # (e.g., /private/.../execroot/build_bazel_rules_nodejs/bazel-out/darwin-fastbuild/bin/internal/linker/test/multi_linker/test.sh.runfiles/build_bazel_rules_nodejs/internal/linker/test/node_modules)
          export BAZEL_PATCH_ROOTS="${BAZEL_PATCH_ROOTS},${RUNFILES_ROOT}/${BAZEL_WORKSPACE}/${root_path}/node_modules"
        fi
      fi
      # TODO: the following guards on the external workspaces may not be necessary and could be removed in the future with care
      if [[ "${root_workspace}" ]] && [[ "${root_workspace}" != "${BAZEL_WORKSPACE}" ]]; then
        # Guard the external workspaces if they are not the user workspace
        # (e.g., /private/.../execroot/build_bazel_rules_nodejs/external/npm_internal_linker_test/node_modules)
        export BAZEL_PATCH_ROOTS="${BAZEL_PATCH_ROOTS},${EXECROOT}/external/${root_workspace}/node_modules"
        if [[ "${RUNFILES_ROOT}" ]]; then
          # If in runfiles guard the external workspace location in runfiles as well
          # (e.g., /private/.../execroot/build_bazel_rules_nodejs/bazel-out/darwin-fastbuild/bin/internal/linker/test/multi_linker/test.sh.runfiles/npm_internal_linker_test/node_modules)
          export BAZEL_PATCH_ROOTS="${BAZEL_PATCH_ROOTS},${RUNFILES_ROOT}/${root_workspace}/node_modules"
          # and include the legacy runfiles location incase legacy runfiles are enabled
          # (e.g., /private/.../bazel-out/darwin-fastbuild/bin/internal/linker/test/multi_linker/test.sh.runfiles/build_bazel_rules_nodejs/external/npm_internal_linker_test/node_modules)
          export BAZEL_PATCH_ROOTS="${BAZEL_PATCH_ROOTS},${RUNFILES_ROOT}/${BAZEL_WORKSPACE}/external/${root_workspace}/node_modules"
        fi
      fi
    fi
  done
fi
if [[ -n "${VERBOSE_LOGS:-}" ]]; then
  echo "BAZEL_PATCH_ROOTS=${BAZEL_PATCH_ROOTS}" >&2
fi

if [ "$PATCH_REQUIRE" = true ]; then
  require_patch_script=${BAZEL_NODE_PATCH_REQUIRE}
  # See comment above
  case "${require_patch_script}" in
    # Absolute path on unix
    /*          ) ;;
    # Absolute path on Windows, e.g. C:/path/to/thing
    [a-zA-Z]:/* ) ;;
    # Otherwise it needs to be made relative
    *           ) require_patch_script="${PWD}/${require_patch_script}" ;;
  esac
  LAUNCHER_NODE_OPTIONS+=( "--require" "$require_patch_script" )
  # Change the entry point to be the loader.js script so we run code before node
  MAIN=$(rlocation "angular/packages/common/locales/closure_locale.update_loader.js")
else
  # Entry point is the user-supplied script
  MAIN="${PWD}/""external/build_bazel_rules_nodejs/internal/generated_file_test/bundle.js"
  # TODO: after we link-all-bins we should not need this extra lookup
  if [[ ! -f "$MAIN" ]]; then
    if [ "$FROM_EXECROOT" = true ]; then
      MAIN="$EXECROOT/$MAIN"
    else
      MAIN=$(rlocation "build_bazel_rules_nodejs/internal/generated_file_test/bundle.js")
    fi
  fi
  # Always set up source-map-support using our vendored copy, just like the require_patch_script
  register_source_map_support=$(rlocation build_bazel_rules_nodejs/third_party/github.com/source-map-support/register.js)
  LAUNCHER_NODE_OPTIONS+=( "--require" "${register_source_map_support}" )
fi

# The EXPECTED_EXIT_CODE lets us write bazel tests which assert that
# a binary fails to run. Otherwise any failure would make such a test
# fail before we could assert that we expected that failure.
readonly EXPECTED_EXIT_CODE="0"

if [[ -n "${COVERAGE_DIR:-}" ]]; then
  if [[ -n "${VERBOSE_LOGS:-}" ]]; then
    echo "Turning on node coverage with NODE_V8_COVERAGE=${COVERAGE_DIR}" >&2
  fi
  # Setting NODE_V8_COVERAGE=${COVERAGE_DIR} causes NodeJS to write coverage
  # information our to the COVERAGE_DIR once the process exits
  export NODE_V8_COVERAGE=${COVERAGE_DIR}
fi

# Bash does not forward termination signals to any child process when
# running in docker so need to manually trap and forward the signals
_term() {
  kill -TERM "${child}" 2>/dev/null
}

_int() {
  kill -INT "${child}" 2>/dev/null
}

# Execute the main program
if [[ -n "$NODE_WORKING_DIR" ]]; then
  cd "$NODE_WORKING_DIR"
fi
set +e

if [[ -n "${STDOUT_CAPTURE}" ]] && [[ -n "${STDERR_CAPTURE}" ]]; then
  "${node}" ${LAUNCHER_NODE_OPTIONS[@]+"${LAUNCHER_NODE_OPTIONS[@]}"} ${USER_NODE_OPTIONS[@]+"${USER_NODE_OPTIONS[@]}"} "${MAIN}" ${ARGS[@]+"${ARGS[@]}"} <&0 >$STDOUT_CAPTURE 2>$STDERR_CAPTURE &
elif [[ -n "${STDOUT_CAPTURE}" ]]; then
  "${node}" ${LAUNCHER_NODE_OPTIONS[@]+"${LAUNCHER_NODE_OPTIONS[@]}"} ${USER_NODE_OPTIONS[@]+"${USER_NODE_OPTIONS[@]}"} "${MAIN}" ${ARGS[@]+"${ARGS[@]}"} <&0 >$STDOUT_CAPTURE &
elif [[ -n "${STDERR_CAPTURE}" ]]; then
  "${node}" ${LAUNCHER_NODE_OPTIONS[@]+"${LAUNCHER_NODE_OPTIONS[@]}"} ${USER_NODE_OPTIONS[@]+"${USER_NODE_OPTIONS[@]}"} "${MAIN}" ${ARGS[@]+"${ARGS[@]}"} <&0 2>$STDERR_CAPTURE &
else
  "${node}" ${LAUNCHER_NODE_OPTIONS[@]+"${LAUNCHER_NODE_OPTIONS[@]}"} ${USER_NODE_OPTIONS[@]+"${USER_NODE_OPTIONS[@]}"} "${MAIN}" ${ARGS[@]+"${ARGS[@]}"} <&0 &
fi

readonly child=$!
trap _term SIGTERM
trap _int SIGINT
wait "${child}"
# Remove trap after first signal has been receieved and wait for child to exit
# (first wait returns immediatel if SIGTERM is received while waiting). Second
# wait is a no-op if child has already terminated.
trap - SIGTERM SIGINT
wait "${child}"

RESULT="$?"
set -e

if [[ -n "${EXIT_CODE_CAPTURE}" ]]; then
  echo "${RESULT}" > "${EXIT_CODE_CAPTURE}"
fi

if [ "${EXPECTED_EXIT_CODE}" != "0" ]; then
  if [ ${RESULT} != ${EXPECTED_EXIT_CODE} ]; then
    echo "Expected exit code to be ${EXPECTED_EXIT_CODE}, but got ${RESULT}" >&2
    if [ "${RESULT}" -eq "0" ]; then
      # This exit code is handled specially by Bazel:
      # https://github.com/bazelbuild/bazel/blob/486206012a664ecb20bdb196a681efc9a9825049/src/main/java/com/google/devtools/build/lib/util/ExitCode.java#L44
      readonly BAZEL_EXIT_TESTS_FAILED=3;
      exit ${BAZEL_EXIT_TESTS_FAILED}
    fi
  else 
    exit 0
  fi
fi

# Do not collect coverage for failed tests
if [ ${RESULT} -ne 0 ]; then
  if [[ -n "${EXIT_CODE_CAPTURE}" ]]; then
    exit 0
  else
    exit ${RESULT}
  fi
fi

# Post process the coverage information after the process has exited
if [[ -n "${COVERAGE_DIR:-}" ]]; then
  if [[ -n "${VERBOSE_LOGS:-}" ]]; then
    echo "Running coverage lcov merger script with arguments" >&2
    echo "  --coverage_dir="${COVERAGE_DIR}"" >&2
    echo "  --output_file="${COVERAGE_OUTPUT_FILE}"" >&2
    echo "  --source_file_manifest="${COVERAGE_MANIFEST}"" >&2
  fi

  set +e
  "${node}" ${LAUNCHER_NODE_OPTIONS[@]+"${LAUNCHER_NODE_OPTIONS[@]}"} "${lcov_merger_script}" --coverage_dir="${COVERAGE_DIR}" --output_file="${COVERAGE_OUTPUT_FILE}" --source_file_manifest="${COVERAGE_MANIFEST}"
  RESULT="$?"
  set -e

  if [[ -n "${EXIT_CODE_CAPTURE}" ]]; then
    echo "${RESULT}" > "${EXIT_CODE_CAPTURE}" >&2
  fi
fi

if [[ -n "${EXIT_CODE_CAPTURE}" ]]; then
  exit 0
else
  exit ${RESULT}
fi
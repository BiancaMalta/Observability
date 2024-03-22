import subprocess
import sys


def run_flake8():
    """Run flake8 to lint the Python files."""
    files_to_lint = ['app.py']  # Add more Python files if necessary
    command = ['flake8'] + files_to_lint

    try:
        subprocess.run(command, check=True)
        print("Lint tests passed successfully.")
    except subprocess.CalledProcessError as e:
        print("Lint tests failed.")
        sys.exit(e.returncode)

if __name__ == "__main__":
    run_flake8()

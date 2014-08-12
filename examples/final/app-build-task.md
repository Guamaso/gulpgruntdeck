Step  |Name                             |Description
------|---------------------------------|-----------------------------------------------------------------------
1     |Run tests on files               |Run tests on files, abort if any failures.
2     |Create build folder              |Create folder structure for build.
3     |Lint files                       |Check for code debt/smells.
4     |Concatenate files                |Concatenate all similar files (js with js, etc).
5     |Minimize files                   |Remove comments, remove as much whitespace as possible, etc.
6     |Create responsive images         |Create multiple sizes of images.
7     |Copy files to build              |Copy files to the appropriate build folder.
8     |Replace file calls               |Replace any calls to the concatenated files with the new single file.
9     |Run tests again                  |Make sure build process didn't break anything.
10    |ZIP build                        |Compress the build folder into a ZIP archive.
11    |Move ZIP to servers              |Move the zip archive to predefined servers using FTP, GIT, or Dropbox, or whatever.
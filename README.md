Nifty trick: Create a new repository on the command line
____________
head over to [Hub]https://hub.github.com/ a command line wrapper for git  and [helpful reference]https://pythonhosted.org/hub/
be sure to ` brew install hub ` first

then set up an alias
`alias git=hub`

and check that it worked
`git version`
should give you something like ...
`git version 2.1.4
hub version 2.2.0`

...then ...

* `touch README.md` to add a README.md
* `git init`
* `git add README.md`
* `git commit -m "first commit"`
* `hub create -d "new project description here"` (creates a new project on GitHub with the name of the current directory)
* git remote -add -f origin git@github.com:USER/REPO.git
* `git push origin master`


Review of JS stuff:
-------

* Reverse string
* Factorialize
* Palindrome check
* Longest Word
* Titlecase
* Largest Num in Array
* confirm ending
* repeat string num times
* truncate string
* chunky monkey
* slasher
* mutations
* false bouncer
* seek and destroy
* where do i belong
* caesars cipher
* sum all nums in range
* diff array
* roman num converter

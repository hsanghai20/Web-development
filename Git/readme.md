# Git Basics
* Git init
* Git status
* Git add --  git add . for all file at once or we can do git add -A
* Git commit git commit -m "message"
* Git remove files from staging area== git restore --staged <file name>

# Git checkout
* Git log -- get out of git log type "q" it give the status of all commit
* Git checkout == git checkout 8379283...
* for going back to certain commit and revert back
git revert --no-commit 9483920..HEAD
git commit -m (message)

# git ignore 
* just add file name to .gitignore and then they cant see that 

# git branches
* git branch == listing  the branch
* for adding a branch and goes to that branch use == git checkout -b <branchname>
* for going to different existing branch we use git checkout <branchname>
* for merging the two branches git merge <filename> make yourself in that branch in which you want to merge
* for remove branch == git branch -d <filename>
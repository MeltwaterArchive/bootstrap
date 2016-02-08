# DataSift BootStrap

A toolkit to help create DataSift branded web resources.

## Creating the documentation

The documentation is created using Jekyll, run the following to see the documentation
    
    cd docs
    jekyll serve --watch

### Pushing the documentation live

The documentation is based on the built version of the site to push this live
jekyll needs to of run and then run the following command from the root of the
project.

    git subtree push --prefix docs/_site origin gh-pages

## Running SaSS

`sass --watch sass:css --style compressed`
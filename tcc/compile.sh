#!/bin/bash
pdflatex tcc.tex
bibtex tcc
pdflatex tcc.tex x 2

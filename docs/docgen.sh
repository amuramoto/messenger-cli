#! /bin/bash  

cat docs/OVERVIEW.md > README.md && 
echo '## Usage\n\n```' >> README.md && 
messenger -h >> README.md && 
echo '```' >> README.md
echo '### `profile` options\n\n```' >> README.md && 
messenger profile -h >> README.md && 
echo '```' >> README.md
echo '### `code` options\n\n```' >> README.md && 
messenger code -h >> README.md && 
echo '```' >> README.md
echo '### `nlp` options\n\n```' >> README.md && 
messenger nlp -h >> README.md && 
echo '```' >> README.md



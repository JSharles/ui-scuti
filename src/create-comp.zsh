#!/bin/bash
# Creates boilerplate for React Component

# Open terminal > cd .bash/ > type './crcomp.zsh ExampleName'

mkdir $1
cd $1
touch $1.tsx
touch $1.style.css
touch $1.types.ts
touch index.ts

echo "import React, { FC, HTMLAttributes } from 'react';" >> $1.tsx
echo "//import './$1.style.css';" >> $1.tsx
echo "" >> $1.tsx
echo "export interface Props extends HTMLAttributes<HTMLDivElement> {" >> $1.tsx
echo "/** prop description goes here */" >> $1.tsx
echo "};" >> $1.tsx
echo "" >> $1.tsx
echo "export const $1: FC<Props> = ( props ) => {" >> $1.tsx
echo "   return (" >> $1.tsx
echo "       <div>" >> $1.tsx
echo "          <p>$1</p>" >> $1.tsx
echo "      </div>" >> $1.tsx
echo "  )" >> $1.tsx
echo " };" >> $1.tsx
echo "" >> $1.tsx
echo "export default $1;" >> $1.tsx
echo "export { default } from './$1';" >> index.ts

cd ..
# Later on, one should export component and types located in the src folder
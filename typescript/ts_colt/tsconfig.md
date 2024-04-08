**tsc --watch / -w  파일이름.ts**
변경사항이 있을 때마다 자동으로 컴파일해줌


**tsc**
모든 ts파일을 감시


**tsconfig.json - "files": ["컴파일 할 파일.ts"]**
해당 파일만 컴파일하고 나머지는 무시됨
소규모 프로젝트에 적당한 방법


**tsconfig.json - "include": ["folder"/**/*] /"exclude":["src/**.test.ts", "node_modules"]**
include로 디렉토리를 지정하고
exclude로 제외할 파일을 설정 
기본값인 node module도 제외 필수


**tsconfig.json - "outDir":"./dist"**
js파일을 내보낼 위치 지정가능 (/dist로 보내기)
기본적으로 ts옆에 위치함. 


**tsconfig.json - "target":"es2016"**
js의 버전을 설정


**tsconfig.json - "strict": true**
타입, 오타 등등을 검사
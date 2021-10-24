# Json To Xlsx

> sheet.js 모듈을 사용하여 json을 엑셀로 만들어 보기.   
> 아래의 공식 깃헙에서 소스를 참고.    
> https://github.com/SheetJS/sheetjs    
> Node example : https://github.com/SheetJS/sheetjs/tree/master/demos/server   

## 간단한 설명

### 1. output이 될 데이터를 만들어 내기

우선적으로, workbook Object를 만들어 낸다.      
`const workbook = xlsx.utils.book_new();`

하나의 엑셀시트는 워크시트라고 일컽는다. 이것 또한 직접 만들어 줘야 하며,    
여기에 데이터를 인수로 넣으면 엑셀 시트 내에 데이터가 들어가게 된다.
만약, 데이터가 이차원 배열이라면, aoa_to_sheet를 사용하면 된다.     

npm package인 xlsx는 헬퍼 함수가 많은데, 그 중에서 **write, writeFile**을 이용해서 데이터를 만들어 낸다.    
이들을 이용하면 다양한 포맷의 데이터를 만들어 낼 수 있다.     
참고로, xlsx.writeFile는 fs 모듈의 fs.writeFileSync을 이용하여 만들어졌다.    

### 2. 파일 내보내기.
write : buffer단위의 파일을 만들어서 생성    
writeFile : 파일을 내부 경로에 저장.     


## start

cli 를 이용해서 설치하게 되면 src/ 하단에 보일러플레이트 코드들이 생긴다.

core file들도 생기는데, 하단의 몇 가지 코어파일

- app.controller.ts : 싱글 라우트의 기본 컨트롤러    
- app.controller.spec.ts : unit tests    
- app.module.ts: 어플리케이션의 루트 모듈     
- app.service.ts: 싱글 메소드의 기본 서비스    
- main.ts: entry file    

Nest application instance를 만들기 위해, NestFactory  class를 이용해야 함.
해당 클래스는 몇 가직 스태틱 메서드를 보내줌.

create()가 어플리케이션 객체를 리턴해줌,.. 


### 라이브 서버 
`npm run start:dev`

## Controller


https://docs.nestjs.com/controllers


- `@Request(), @Req()`: req
- `@Response(). @Res()`: res
- `@Next`
- `@Session()`
- `@Param(key?: string`
- `@Body(key?: string )` : requestbody -> **_req.body_**
- `@Query(key? : string`:req.query
- `@Headers(name?:string)`
- `@Ip()`: req.ip
...

## Service

내부의 Injectable은 디펜던시 인젝션이 가능하다는 뜻


## Todos  ✓

- [ ] Logging
- [ ] Sequelize functions
- [ ] Sql 
- [ ] directory 
- [ ] error control
- [ ] Authenticate
- [ ] View engine

## Providers

services, repositories, factories helpers...들을 providerfkrh qnfmsek. 

클래스 간의 다양한 관계를 규정하게 해준다. 


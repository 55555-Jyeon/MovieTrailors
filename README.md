# startNext

next.js를 시작하기 위한 intro

<br />

자세한 설명은 velog에서 확인하기 👉 <a href="https://velog.io/@55555-jyeon/next-js">@55555-jyeon's velog</a>

<br />
<br />

### code challenge

make it better by using credits, providers, similar
<a href="https://nomad-movies.nomadcoders.workers.dev/" >detail infos.</a>

<p align="center">
<img width="80%" src="https://github.com/55555-Jyeon/startNext/assets/134191817/e740678b-f704-493c-a2fe-0e2c55bb2412">

</p>

1️⃣ check API

response.data의 값을 하나 단위로 쪼개 보기 편하도록 정리

```javascript
// one movie
{
    "adult":false,
    "backdrop_path":"https://image.tmdb.org/t/p/w1280/ycnO0cjsAROSGJKuMODgRtWsHQw.jpg","belongs_to_collection":null,
    "budget":100000000,
    "genres":[],
    "homepage":"http://www.oppenheimermovie.com",
    "id":872585,
    "imdb_id":"tt15398776",
    "original_language":"en",
    "original_title":"Oppenheimer",
    "overview":"The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
    "popularity":453.406,
    "poster_path":"https://image.tmdb.org/t/p/w780/ptpr0kGAckfQkJeJIt8st5dglvd.jpg","production_companies":[],
    "production_countries":[],
    "release_date":"2023-07-19",
    "revenue":952000000,
    "runtime":181,
    "spoken_languages":[],
    "status":"Released",
    "tagline":"The world forever changes.",
    "title":"Oppenheimer",
    "video":false,
    "vote_average":8.116,
    "vote_count":6771
}
```

```javascript
// detail
"genres":[
    {
        "id":18,
        "name":"Drama"
    },
],
"production_companies":[
    {
        "id":9996,"
        logo_path":"https://image.tmdb.org/t/p/w300/3tvBqYsBhxWeHlu62SIJ1el93O7.png","name":"Syncopy",
        "origin_country":"GB"
    },
]
"production_countries":[
    {
        "iso_3166_1":"GB",
        "name":"United Kingdom"
    },
],
"spoken_languages":[
    {
        "english_name":"Dutch",
        "iso_639_1":"nl",
        "name":"Nederlands"
    },
],
```

```javascript
// one credit
{
    "adult":false,
    "gender":2,
    "id":2037,
    "known_for_department":"Acting",
    "name":"Cillian Murphy",
    "original_name":"Cillian Murphy",
    "popularity":77.4,
    "profile_path":"https://image.tmdb.org/t/p/w185/2lKs67r7FI4bPu0AXxMUJZxmUXn.jpg","cast_id":3,
    "character":"J. Robert Oppenheimer",
    "credit_id":"613a940d9653f60043e380df",
    "order":0
}
```

```javascript
// one provider
"AO":{"link":"https://www.themoviedb.org/movie/872585-oppenheimer/watch?locale=AO","rent":[{"logo_path":"https://image.tmdb.org/t/p/w300/8z7rC8uIDaTM91X0ZfkRf04ydj2.jpg","provider_id":3,"provider_name":"Google Play Movies","display_priority":0}],"buy":[{"logo_path":"https://image.tmdb.org/t/p/w300/8z7rC8uIDaTM91X0ZfkRf04ydj2.jpg","provider_id":3,"provider_name":"Google Play Movies","display_priority":0}]}
```

```javascript
// one similar
{
    "adult":false,
    "backdrop_path":"https://image.tmdb.org/t/p/w1280/2QCwYIcWkRcGMNSqHFrbdppZgX6.jpg","genre_ids":[28,18,36,10752],
    "id":11422,
    "original_language":"en",
    "original_title":"Midway",
    "overview":"This war drama depicts the U.S. and Japanese forces in the naval Battle of Midway, which became a turning point for Americans during World War II.","popularity":24.192,
    "poster_path":"https://image.tmdb.org/t/p/w780/vCzGV28YFmWubUn1jh8ytagYocR.jpg","release_date":"1976-06-18",
    "title":"Midway",
    "video":false,
    "vote_average":6.625,
    "vote_count":272
},
```

<br />

2️⃣ code challenge

위 data의 형태와 값들을 확인 후 render하고 싶은 것들을 골라 code challenge 진행

- design change : 니꼬 쌤과 함께 진행한 css에서 일부 수정

<p align="center">
<img width="80%"  src="https://github.com/55555-Jyeon/startNext/assets/134191817/565cf4a5-019e-4015-b87a-5f112a9bbab1">
</p>

- similar movies

<p align="center">
<img width="80%"  src="https://github.com/55555-Jyeon/startNext/assets/134191817/aa7f1a6f-e33f-498e-8daf-42dc4da14812">
</p>
<p align="center">
<img width="80%"  src="https://github.com/55555-Jyeon/startNext/assets/134191817/4d9556d4-e87e-4e7e-b6f7-60468c264102">
</p>

- providers

<p align="center">
<img width="80%"  src="https://github.com/55555-Jyeon/startNext/assets/134191817/d4430681-5a07-4ae2-913a-99b0a8df4ba5">
</p>
<p align="center">
<img width="80%"  src="https://github.com/55555-Jyeon/startNext/assets/134191817/a3a2be8f-85f1-497a-860d-91327eaf4885">
</p>

- credits

<p align="center">
<img width="80%"  src="https://github.com/55555-Jyeon/startNext/assets/134191817/4a4df17e-3004-469b-b675-9cfc06cb9d28" />
</p>
<p align="center">
<img width="80%"  src="https://github.com/55555-Jyeon/startNext/assets/134191817/a63b4814-cc89-422a-b8df-a0a548796c39" />
</p>

<br />

3️⃣ final page design

- main

<p align="center">
<img width="80%" src="https://github.com/55555-Jyeon/startNext/assets/134191817/fce2b7a2-54f2-49fd-8d04-968036dd1566" />
</p>

- detail

<p align="center">
<img width="80%" src="https://github.com/55555-Jyeon/startNext/assets/134191817/0f594627-2cc7-43b6-9ce8-dce918e461d0" />
</p>

- error-page

<p align="center">
<img width="80%" src="https://github.com/55555-Jyeon/startNext/assets/134191817/93d14bb0-2774-44f3-9674-07c82879feee" />
</p>

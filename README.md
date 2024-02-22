# startNext

next.js를 시작하기 위한 intro

<br />

자세한 설명은 velog에서 확인하기 👉 <a href="https://velog.io/@55555-jyeon/next-js">@55555-jyeon's velog</a>

<br />
<br />

### code challenge

make it better by using credits, providers, similar
<a href="https://nomad-movies.nomadcoders.workers.dev/" >detail infos.</a>

1️⃣ check API

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

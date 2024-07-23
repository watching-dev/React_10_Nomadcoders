export default function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return <h1>movieDetail: {id}</h1>;
}

/*
    props를 console.log로 찍어보면 브라우저 콘솔에서 안보임 -> 서버 사읻드에서 처리하는 것으로
    서버 로그에서 보면 보인다
    총 두 개 파라미터가 나오는데 params, searchParams이다
    params는 [id]로 했던것이 변수 이름으로 출력되고 현재 url의 id 값이 출력된다
    searchParams는 url에 /123123?region=kr&country=korea 처럼 되어 있으면
    searchParams에 각각 출력된다
*/

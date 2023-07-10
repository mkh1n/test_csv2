import _ from 'lodash';

export default function solution(content){
  const contentArr = content.trim().split('\n').slice(1).map((row)=>row.split(','))
  //Первый шаг
  console.log(`Количество партий: ${contentArr.length}`)

  //Второй шаг
  const ratedCount = contentArr.filter((game)=>game[1] == 'TRUE').length
  const nonRatedCount = contentArr.length - ratedCount
  console.log(`Рейтинговых игр: ${((ratedCount/contentArr.length)*100).toFixed(2)}%`)
  console.log(`Нерейтинговых игр игр: ${((nonRatedCount/contentArr.length)*100).toFixed(2)}%`)

  //Третий шаг
  const debutes = Array(...new Set(contentArr.map((game)=>game[13]))).sort()
  console.log(debutes)
}
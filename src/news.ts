interface INewsPreview {
  title: string
  time: string
}

interface IResult {
  event: string
  maps: string | 'bo3'
  team1: {
    name: string
    crest: string
    result: number
  }
  team2: {
    name: string
    crest: string
    result: number
  }
  matchId: string
}

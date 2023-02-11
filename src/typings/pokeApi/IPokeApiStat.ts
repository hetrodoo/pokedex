interface IStat {
  name: string
  url: string
}

interface IPokeApiStat {
  // eslint-disable-next-line camelcase
  base_stat: number
  effort: number
  stat: IStat
}

export default IPokeApiStat;

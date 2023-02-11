interface IType {
  name: string
  url: string
}

interface IPokeApiType {
  slot: number
  type: IType
}

export default IPokeApiType;

interface IAbility {
  name: string
  url: string
}

interface IPokeApiAbility {
  ability: IAbility
  // eslint-disable-next-line camelcase
  is_hidden: boolean
}

export default IPokeApiAbility;

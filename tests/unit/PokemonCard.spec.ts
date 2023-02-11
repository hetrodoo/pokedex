import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import PokemonCard from '@/components/Smart/PokemonCard.vue';
import IPokemonStats from '@/typings/IPokemonStats';

describe('PokemonCard.vue', () => {
  it('Should render all props', () => {
    const image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png';
    const name = 'Pikachu';
    const types = ['electric'];
    const abilities = ['static', 'ightning-rod'];
    const stats: IPokemonStats = {
      atk: 250,
      def: 251,
      hp: 252,
      sAtk: 253,
      sDef: 254,
      speed: 255,
    };

    const wrapper = mount(PokemonCard, {
      props: {
        image,
        name,
        types,
        abilities,
        stats,
      },
    });

    expect(wrapper.element.getElementsByTagName('img')[0].src).to.equals(image);
    expect(wrapper.text()).to.include(name);
    types.forEach((type) => expect(wrapper.text()).to.include(type));
    abilities.forEach((type) => expect(wrapper.text()).to.include(type));
    Object.values(stats).forEach((stat) => expect(wrapper.text()).to.include(stat));
  });
});

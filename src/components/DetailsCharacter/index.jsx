import { useContext } from 'react';
import * as D from '../../App.styles';
import { RickMortyContext } from '../../context/RickMortyContext';
import { useApiInterface } from '../../hooks/useApiInterface';
import * as C from './styles'

export const DetailsCharacter = () => {
  const { getAll, charactersList } = useApiInterface();
  getAll();

  const { characterSelected } = useContext(RickMortyContext);

  return charactersList.filter((item) => item.id === characterSelected).map((item) => (
    <D.Container>
      <C.DetailsCharacter>

        <div className="character-card">
          <img src={item.image} alt={item.name} />
          <h1>{ item.name }</h1>
          { item.status !== 'Alive' ? (
            <p className="characterStatusColorAlive">
              { item.status }
            </p>
          ) : (
            <p className="characterStatusColorDead">
              { item.status }
            </p>
          ) }
          <p>
            { item.species }
          </p>
          { item.type === '' ? (<p>Type: ?</p>) : (
            <p>
              { item.type }
            </p>
          ) }
          <p>
            { item.gender }
          </p>
          <p>
            { item.origin.name }
          </p>
          <p>
            { item.location.name }
          </p>
          <p>
            Number episodes:
            { item.episode.length }
          </p>
        </div>
      </C.DetailsCharacter>
    </D.Container>
  ));
};

export default DetailsCharacter;

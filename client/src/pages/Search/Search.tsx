import { ReactElement } from 'react';
import { useListDoctors } from '../../hooks/useListDoctors';

const Search = (): ReactElement => {
    const {doctors } = useListDoctors(true);
    debugger;

    return <div>
        <p>Search</p>
        <ul>
            {doctors?.map(d => <li>{d.first_name}</li>)}
        </ul>
    </div>;
};

export default Search;

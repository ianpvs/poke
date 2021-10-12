import React, { useState, useCallback, useEffect } from 'react';

import List from './List';

import {
    Container,
    Input,
    Row,
    Button,
    Logo
} from './styles';

import { getDataPoke } from '../functions';

function Application() {

    const [search, setSearch] = useState('');
    const [abilities, setAbilities] = useState([]);

    const onSubmit = useCallback(async e => {
        e.preventDefault();

        const data = await getDataPoke(search);

        setAbilities(data);

        setSearch('');
    }, [search]);

    useEffect(() => {
        console.log(abilities);
    }, [abilities]);

    return (
        <Container>
            <Logo
                src="/pokelogo.png"
            />

            <div style={{ width: '50%' }}>
                <form onSubmit={onSubmit} style={{ width: '100%', marginBottom: 20 }}>
                    <Row>
                        <Input
                            placeholder="Enter the pokemon's name"
                            value={search}
                            onChange={e => {
                                setSearch(e.target.value);

                                setAbilities([]);
                            }}
                        />

                        <Button>
                            Buscar
                        </Button>
                    </Row>
                </form>

                <List data={abilities} />
            </div>
        </Container>
    );
}

export default Application;
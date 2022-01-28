import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        font-size: 2rem;
        color: var(--green-light);
    }

    select {
        margin-right: 2rem;
        padding: 0 2rem;
        height: 3rem;
        border-radius: 0.25rem;

        border: 1px solid var(--border-color);
        background: var(--background-input);

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }

        & + select {
            margin-top: 1rem;
        }
    }
`;
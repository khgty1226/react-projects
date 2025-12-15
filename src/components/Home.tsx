import styled from "styled-components";

function Home (){
    const Wrapper = styled.div`
        display: flex;
        gap: 50px;
    `;
    return <Wrapper>
        <a href="/coin-tracker">Coin-Tracker</a>
        <a href="/toDo">To Do</a>
        <a href="/nflix">NFlix</a>
    </Wrapper>;
}

export default Home;
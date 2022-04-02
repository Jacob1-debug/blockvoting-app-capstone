import React from 'react';
import Header from './Header'
import {Table,Container, Button} from 'react-bootstrap'
const Home = props => {
    const promptList =[
        "who would win in SmashBros?",
        "Who's the Best Actor?",
    ]
    return (
        <Container>
            <Header/>
            <Table style={{margin:"5vh"}}Striped bordered hover>
                <thead>
                    <tr>
                        <th>List of Polls</th>
                            <th>Go to Poll</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        promptList.map((el,index)=>{
                            return(
                            <tr key={index}>

                                <td>{index +1}</td>
                                <td>{el}</td>
                            <td>
                                {" "}
                                <Button>Go to Poll</Button>
                            </td>
                            </tr>
                            );
                        })
                    }

                </tbody>
            </Table>
        </Container>
    );
};

export default Home;
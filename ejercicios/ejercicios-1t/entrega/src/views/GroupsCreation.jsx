import styled from "styled-components";
import Link from "../components/Link";
import GroupCard from "../components/GroupCard";
import { useState, useCallback } from "react";

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Content = styled.div`
  margin-top: 50px;
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form``;

const Input = styled.input`
  text-align: center;
  padding: 10px 15px;
  font-size: 18px;
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid gray;
  color: white;
`;

const Button = styled.button`
  margin-top: 50px;
  background-color: #3dc670;
  padding: 15px 20px;
  outline: none;
  border: none;
  border-radius: 20px;
  color: white;
  font-size: 18px;
  font-weight: 600px;
`;

const List = styled.div`
  margin-top: 50px;
  width: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const Name = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  width: auto;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 500;
  color: white;
  text-align: center;
  margin: 20px;
  :hover{
    cursor: pointer;
    color: #ccf;
  }
`;

const GroupsCreation = () => {
  const [allNames, setAllNames] = useState([]);
  const [groups, setGroups] = useState([]);
  const [name, setName] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (allNames.includes(name.toLocaleLowerCase())) {
        alert("Nombre ya en uso");
      } else {
        setAllNames([...allNames, name.toLocaleLowerCase()]);
        setName("");
      }
    },
    [setName, allNames, name]
  );

  const handleChange = useCallback(
    (e) => {
      e.preventDefault();
      setName(e.target.value);
    },
    [setName]
  );

  const deleteName = useCallback(
    (e) => {
      const newAllNames = allNames.filter((value) => {
        return value !== e.target.value;
      });
      setAllNames(newAllNames);
    },
    [allNames, setAllNames]
  );

  const shuffle = (array) => {
    let i = array.length;
    while (i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = array[i];
      array[i] = array[j];
      array[j] = tmp;
    }

    return array
  }

  const generateGroups = useCallback(() => {
    const shuffledNames = shuffle(allNames);
    const newGroups = [];
    const len = 3;

    for (let i = 0; i < shuffledNames.length; i += len) {
        let group = shuffledNames.slice(i, i + len);
        newGroups.push(group);
    }

    setGroups(newGroups)
  }, [allNames, setGroups]);

  return (
    <Container>
      <Link to="/">Go back</Link>
      <Content>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={name}
            onChange={handleChange}
            name="name"
            placeholder="Nuevo nombre..."
            autoComplete="off"
          />
        </Form>
        <List>
          {allNames.map((name) => (
            <Name key={name} value={name} onClick={deleteName}>
              {name}
            </Name>
          ))}
        </List>
        {allNames.length > 0 && (
          <Button onClick={generateGroups}>Generar grupos</Button>
        )}

        <List style={{width: 800}}>
            {groups.map((group, index) => (
                <GroupCard key={group[0]} group={group} number={index + 1} />
            ))}
        </List>
      </Content>
    </Container>
  );
};

export default GroupsCreation;

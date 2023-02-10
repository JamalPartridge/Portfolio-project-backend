const db = require("../db/dbConfig");

const getAgent = async (id) => {
    try {
        const oneAgent = await db.one('SELECT * FROM agents WHERE id=$1', id);
        return oneAgent;
    } catch (error) {
        return error
    }
}
const getAllAgents = async () => {
    try {
        const allAgents = await db.any('SELECT * FROM agents');
        return allAgents;
    } catch (error) {
        return error;  
    }
};
const createAgent = async (agent) => {
    try {
    const newAgent = await db.one('INSERT INTO agents (name, role, abilities, image) VALUES($1, $2, $3, $4, $5) RETURNING *',[agent.name, agent.role, agent.abilities, agent.isPlayableCharacter, agent.image]
        );
        return newAgent;
    } catch (error) {
        return error;
    }
};
const deleteAgent = async (id) => {
    try {
        const deletedAgent = await db.one(
            "DELETE FROM agent WHERE id = $1 RETURNING *",
            id
        );
        return deletedAgent
    } catch (error) {
        return error;
    }
  };
  const updateAgent = async (id, agent) => {
    try {
      const updatedAgent = await db.one(
        "UPDATE agents SET name=$1, role=$2, abilities=$3, isPlayableCharacter=4 image=$5 where id=$6 RETURNING *",
        [agent.name, agent.role, agent.abilities, agent.isPlayableCharacter, agent.image, id]
        );
        return updatedAgent;
    } catch (error) {
        return error;
    }
  };


module.exports = { getAgent, getAllAgents, createAgent, deleteAgent, updateAgent };
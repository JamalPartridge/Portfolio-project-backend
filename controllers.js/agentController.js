const express = require('express');
const agents = express.Router();
const { checkName, checkBoolean } = require('../validations/checkAgent')

const { getAgent, getAllAgents, createAgent, deleteAgent, updateAgent 
} = require('../queries/agents')

//INDEX
agents.get("/", async (req, res) => {
    const allAgents = await getAllAgents();
    if (allAgents[0]) {
      res.status(200).json(allAgents);
    } else {
      res.status(500).json({ error: "Problem With The Server" });
    }
  });
  
  //SHOW
  agents.get("/:id", async (req, res) => {
    const { id } = req.params;
    const agent = await getAgent(id);
    if (agent) {
      res.status(200).json(agent);
    } else {
      res.status(404).json({ error: "Page Not Found" });
    }
  });
  
  //CREATE
  agents.post("/", checkName, checkBoolean, async (req, res) => {
    const agent = req.body;
    agent.isPlayble = confirmAgent(agent);
    try {
      const createAgent = await createAgent(agent);
      res.status(200).json(createAgent);
    } catch (error) {
      res.status(500).json({ error: "Problem With The Server" });
    }
  });
  
  //DELETE
  agents.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteAgent = await deleteAgent(id);
      res.status(200).json(deleteAgent);
    } catch (error) {
      res.status(404).json({ error: "Page Not Found" });
    }
  });
  
  //UPDATE
  agents.put('/:id', checkName, checkBoolean, async(req,res)=>{
      try {
          const {id}=req.params
          const updatedAgent = await updateAgents(id, req.body)
          res.status(200).json(updatedAgent)
      } catch (error) {
          res.status(404).json({error:"Problem With The Server"})
      }
    });
  
  
  module.exports = Agents;
  
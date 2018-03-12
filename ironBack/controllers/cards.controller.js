const Card = require("../models/Card");

exports.deleteCard = (req,res,next)=>{
  Card.findByIdAndRemove(req.params.id)
  .then(items=>res.status(200).json(items))
  .catch(e=>res.status(500).send(e));
}

exports.patchCard = (req,res,next)=>{
  Card.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(item=>res.status(200).json(item))
  .catch(e=>res.status(500).send(e));
}

exports.getCards = function(req, res, next) {
    Card.find()
    .then(items=>res.status(200).json(items))
    .catch(e=>res.status(500).send(e));
  }

  exports.postCard = (req, res, next)=>{
    const newCard = new Card({
      title: req.body.title,
      list: req.body.list
    });

    newCard.save()
    .then(item=>res.status(201).json(item))
    .catch(e=>res.status(500).send(e));

  }

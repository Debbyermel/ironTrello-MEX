const List = require("../models/List");

exports.deleteList = (req,res,next)=>{
  List.findByIdAndRemove(req.params.id)
  .then(lists=>res.status(200).json(lists))
  .catch(e=>res.status(500).send(e));
}

exports.patchList = (req,res,next)=>{
  List.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(list=>res.status(200).json(list))
  .catch(e=>res.status(500).send(e));
}

exports.getLists = function(req, res, next) {
    List.find()
    .then(lists=>res.status(200).json(lists))
    .catch(e=>res.status(500).send(e));
  }

  exports.postList = (req, res, next)=>{
    const newList = new List({
      title: req.body.title,
      card: req.body.cards
    });

    newList.save()
    .then(list=>res.status(201).json(list))
    .catch(e=>res.status(500).send(e));

  }

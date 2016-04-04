var express = require('express');
var router = express.Router();
var Fish = require('../models/fish');

// api/fish
router.route('/')
	//get all fish from /api/fish
	.get(function(req, res) {
		Fish.find(function(err, fishes) {
			if(err) {
				res.status(500).send(err, 'Something broke!');
			} else {
				res.json(fishes)
			}
		});
	})
	//post fish to /api/fish
	.post(function(req, res) {
		//create new fish
		var fish = new Fish({
			name: req.body.name,
			color: req.body.color,
			people_eater: req.body.people_eater,
			length: req.body.length,
			img: req.body.img,
		})
		//save fish with node style callback
		fish.save(function(err, fish) {
			if (err) {
				res.status(500).send(err, 'Something broke!');
			} else {
				res.json(fish);
			}
		});
	})
//without one_fish, next route would conflict
router.route('/oneFish/:fish_id')
	.get(function(req, res) {
		Fish.findById(req.params.fish_id, function(err, fish) {
			if(err) {
				res.status(500).send(err, 'Something broke!');
			} else {
				res.json(fish)
			}
		});
	})
	.delete(function(req, res) {
		Fish.remove({_id: req.params.fish_id}, function(err, fish) {
			if(err) {
				res.status(500).send(err, 'Something broke!');
			} else {
				res.json({message: "Fish Deleted"})
			}
		})
	})
	.put(function(req, res) {
		Fish.findById(req.params.fish_id, function(err, fish) {
			if(err) {
				res.status(500).send(err, 'Something brokeeeee!');
			} else {
				fish.name = req.body.name ? req.body.name : fish.name;
				fish.color = req.body.color ? req.body.color : fish.color;
				fish.length = req.body.length ? req.body.length : fish.length;
				fish.people_eater = req.body.people_eater ? req.body.people_eater : fish.people_eater;
				fish.img = req.body.img ? req.body.img : fish.img;

				fish.save(function(err) {
					if(err) {
						res.status(500).send(err, 'Something brokkkkke!');
					} else {
						res.json(fish)
					}
				})
			}
		});
	});


router.route('/man_eater')
	.get(function(req, res) {
		Fish.find({people_eater: true}, function(err, fish) {
			if(err) {
				res.status(500).send(err, 'Something broke!');
			} else {
				res.json(fish)
			}
		});
	})

module.exports = router;
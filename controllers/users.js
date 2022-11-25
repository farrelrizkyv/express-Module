const User = require('../models/user')

module.exports = {
    // get all users
    index: async (req, res) => {
        try {
            const users = await User.find()
            res.status(200).json({
                status: true,
                data: users,
                method: req.method,
                url: req.url
            })
            if(users.length > 0){  
            }
            else{
                res.json({
                    status: false,
                    message: "data masih kosong"
                })
            }
           
        } catch (error) {
            res.status(400).json({succes: false})
        }

       
      },
      //get a user
      store: async (req, res) => {
        try {
            const user = await User.create(req.body)
            res.status(200).json({
                status: true,
                data: user,
                method: req.method,
                url: req.url,
                message: "data berhasil ditambahkan"
            })
        } catch (error) {
            res.status(400).json({succes: false});
        }
    },
    
      show: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
                 
            res.json({
                status: true,
                data: user,
                method: req.method,
                url: req.url,
                message: "Data berhasil di dapat"
            });
        
        } catch (error) {
            // console.log(error)
            res.status(400).json({success: false}) 
        }
    
      },

      update: async (req, res) => {
        try {
           const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new : true,
            run : true
           })
           res.json({
            status: true,
            data: user,
            method: req.method,
            url: req.url,
            message: "Data berhasil diubah",
          });
      }catch (error) {
            res.status(400).json({succes: false}) 
        }},
      delete: async (req, res) => {
        try {
            await User .findByIdAndDelete(req.params.id)
            res.json({
                status: true,
                // data: users,
                method: req.method,
                url: req.url,
                message: "data berhasil dihapus"
            })
        } catch (error) {
            res.status(400).json({succes: false}) 

            
        }
       
      },
}
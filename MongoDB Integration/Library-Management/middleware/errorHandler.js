module.exports = (err, req, res, next) => {
    if(err instanceof SyntaxError && err.status === 400 && 'body' in err){
        return res.status(400).json({success: false, message: 'Invalid JSON body'});
    }

    if(err.name ==='ValidationError'){
        const messages = Object.values(err.errors).map((e) => e.message);
        return res.status(400).json({success: false, message: messages.join(', ')});
    }

    if(err.name === 'CastError'){
        return res.status(400).json({success: false, message: `Invalid value for ${err.path}`});
    }

    console.error(err);
    res.status(500).json({success: false, message: 'Internal server error'});
}
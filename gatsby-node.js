const path = require('path')

module.exports.onCreateNode = ( node, actions) => {
    const { createNodeField } = actions

    if(node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        console.log(JSON.stringify('@@@@@@@@@@@@@@@@@@:        ', slug))
    }
    //Prettify JSON data
   
    
    
}
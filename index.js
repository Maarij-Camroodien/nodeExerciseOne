const
{writeFile, readFile,
appendFile} = require('fs')

writeFile('./data.txt', 'Maarij Camroodien', (err, data)=>{
    if(!err)
        console.log(data);
        else
        console.log('An error ocourred');
})

appendFile('./data.txt', ' Maarij Camroodien', (err, data)=>{
    if(!err)
        console.log(data);
        else
        console.log('An error ocourred');
})

readFile('./data.txt', 'utf-8', (err,
    data)=>{
        if(!err)
        console.log(data);
        else
        console.log('An error ocourred');
    })

// the second content was overridden
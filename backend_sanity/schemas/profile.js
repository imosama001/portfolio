export default{
    name:'profile',
    title:'Profile',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'profileImgUrl',
            title:'ProfileImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name:'resumeUrl',
            title:'ResumeUrl',
            type: 'file',
          
        },
        
    ]
}
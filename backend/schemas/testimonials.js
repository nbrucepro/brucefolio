export default {
    name: "testimonials",
    title: "Testimonials",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type:"string"
        },
        {
            name:"company",
            title: "Company",
            type:"string"
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            option: {
                hotspot: true
            }
        },
        {
            name: "feedback",
            title: "Feeback",
            type: "string",
        }
    ]   
}
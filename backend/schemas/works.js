export default {
  name: "works",
  title: "Works",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Tdescription",
      type: "string",
    },
    {
      name: "projectLink",
      title: "projectLink",
      type: "string",
    },
    {
      name: "codeLink",
      title: "codeLink",
      type: "string",
    },
    {
      name: "tag",
      title: "tag",
      type: "array",
      of: [
        {
          name: "tag",
              title: "tag",
          type:"string"
        },
      ],
    },
  ],
};
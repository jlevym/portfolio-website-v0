Blog.config({
  blogIndexTemplate: 'myBlogIndexTemplate', // '/blog' route
  blogShowTemplate: 'myShowBlogTemplate', 
  blogLatestTemplate: 'myLatestWidgetTemplate',
  /*blogLayoutTemplate: 'myBlogLayout', // added this to try and add link */

 // I added this 
  //comments: {// try this for comments
  //	disqusShortname: 'myshortname'
  //},
  title: "Funtime website",
 
  rss: {
    title: 'Funtime',
    description: 'This is an example of Funtime Website'
  },
  language: {
    blogEmpty: 'no ideas:  if you cant see your IDEA, maybe you didnt publish (edit / POST)',
    backToBlogIndex: 'Back to all the ideas',
    loadMore: 'Load More',
    tags: 'Tags',
    slug: 'Slug',
    metaDescription: 'Meta Description',
    body: 'Body',
    showAsVisual: 'Visual',
    showAsHtml: 'HTML',
    save: 'Save',
    cancel: 'Cancel',
    "delete": 'Delete',
    metaAuthorBy: 'By',
    metaAuthorOn: 'on',
    edit: 'Edit',
    areYouSure: 'Are you sure?',
    disqusPoweredBy: 'comments powered by',
    adminHeader:  'use your new link to navigate back ',
    addPost: 'Add an idea',
    allPosts: 'All ideas',
    myPosts: 'My Posts',
    addPost: 'Add an idea',
    editPost: 'Edit an idea (or cancel to navigate out)',
    title: 'Title',
    author: 'Author',
    updatedAt: 'Updated At',
    publishedAt: 'Published At',
    visibleTo: 'Visible To',
    featuredImage: 'Featured Image',
    selectFile: 'Select File',
    imageAsBackground: 'Use as background for title',
    enterTag: 'Type in a tag & hit enter',
    postCreateFirst: 'Create the first blog',
    postVisibilityAdmins: 'not visible',
    postVisibilityLink: 'not visible',
    postVisibilityAnyone: 'POST',
    saved: 'Saved',
    editFeaturedImageSaved: 'Featured image saved',
    editErrorSlugExists: 'Blog with this slug already exists',
    editErrorBodyRequired: 'Blog body is required'
  }
});

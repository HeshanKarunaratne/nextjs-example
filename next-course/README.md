### Documentation

Ignore Routes: (x)
Dynamic Routes: [x]
All Routes: [...x]


- Add below snippet to server components to change the metadata for each page
~~~js
export const generateMetadata = () => {
  return {
    title: "User page generated",
    description: "Heshans description"
  }
}
~~~
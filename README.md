# Vue Component for Transforming an Image into a Canvas Element

This component transforms an image into a canvas element with a specified number of rows and columns. Each element can then be targeted with Javascript and CSS to perform animation and transformations. 

## Installation 

```
npm i canvas-image-grid
```

Example usage

```
    <CanvasGrid
      :image="theimage"
      :columns="columns"
      :rows="rows"
      :canvasHeight="100"
    />
````

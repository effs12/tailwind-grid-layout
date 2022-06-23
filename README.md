# tailwind-grid-layout
A simple recreation guide of Bootstrap Grid using Tailwind CSS grids.

## Example and Usage

Example of bootstrap grid 3 column with equal grid:
```bash
<div class="container">
  <div class="row">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>
```
3 equal columns result:  
![Alt text](./public/assets/images/bootstrap-3-grid.png?raw=true "Bootstrap Grid 3 Column with equal grid")


Recreating it with tailwind:  
```bash
<div class="container">
  <div class="grid grid-cols-3">
    <div>Column</div>
    <div>Column</div>
    <div>Column</div>
  </div>
</div>
```


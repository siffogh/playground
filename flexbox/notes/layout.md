# Approach on how to make extendable components

## container-bottom-top
- Only increases height downward: by increasing the min-height
until it reaches a limit of MAX_HEIGHT.
- MAX_HEIGHT:
    - calculated dynamically whenever you want to resize it.
    - = `height(container_bottom) - height(container-bottom-bottom)`.


## container-bottom-bottom
- Only increases height upward: by increasing min-height of
container-bottom-bottom until it reaches a limit of
MAX_HEIGHT.



## components
### types
- resizable
- togglable

### common attributes
- min-height

# RouteApp

Este proyecto se creo para explicar como funcionan las rutas en angular. 

También poder entender como funcionan las rutas junto con los módulos y módulos dentro de otros módulos, perdón por decir módulos tantas veces **módulos**.


## Comandos para crear módulos en Angular

Crear un módulo

```shell
ng generate module nombre_del_modulo
ng g m nombre_del_modulo
```

Crear módulo con **Routing**
```shell
ng generate module nombre_del_modulo --routing
ng g m nombre_del_modulo --routing
```

Crear un component dentro del módulo sin necesidad de navegar por las carpetas

```shell
ng generate component nombre_del_modulo/nombre_del_nuevo_componente

ng g c nombre_del_modulo/nombre_del_nuevo_componente
```



Crear un modulo dentro de otro módulo

```shell
ng generate module nombre_del_modulo/nombre_del_submodulo

ng g m nombre_del_modulo/nombre_del_submodulo

```


Crear un modulo dentro de otro módulo con **Routing**

```shell
ng generate module nombre_del_modulo/nombre_del_submodulo --routing

ng g m nombre_del_modulo/nombre_del_submodulo --routing

```
import React, { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, Box, Drawer, Typography, List, ListItem, ListItemText, TableBody } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

import ModalLogin from './login/Login'

const obtenerEstilos = makeStyles(
    (tema) => ({
        botonMenu: {
            marginRight: tema.spacing(2),
        },
        titulo: {
            flexGrow: 1,
        }

    })
);

const MenuPrincipal = () => {
    const estilos = obtenerEstilos();

    //manejo del estado de usuario logueado
    

    //manejo del estado de la ventana modal
    const [estadoModal, setEstadoModal] = useState(false);
    //rutina que abre la ventana modal
    const abrirModal = () => {
        setEstadoModal(true);
    }

    //rutina que cierra la ventana modal
    const cerrarModal = () => {
        setEstadoModal(false);
        
    }

    //manejo del estado del menú
    const [estadoMenu, setEstadoMenu] = useState(false);

    //rutina que dactiva el despliegue del menú
    const mostrarMenu = (estado) => () => {
        setEstadoMenu(estado);
    }

    const menu = () => (
        <Box
            sx={{ width: 300 }}
            role="presentation"
            onClick={mostrarMenu(false)}
        >
            <List>
                {
                   ['Administrador', 'Vendedor', 'Ventas'].map((texto, indice) => (
                    <ListItem button component="a" href={`/${texto}`}>
                        <img src={require(`../assets/iconos/${texto}.png`).default} />
                        <Button onClick={TableBody}>
                    
                        </Button>
                        <ListItemText primary={texto} />
                    </ListItem>
                )
                )
            }
            </List>
           
        </Box>
    )

    return (
        <AppBar position="static">
            <Toolbar>
            <Button onClick={abrirModal}>
                    Ingresar
               </Button>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria_label="Menu Principal"
                    className={estilos.botonMenu}
                    onClick={mostrarMenu(true)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={estilos.titulo}>
                    gestion de ventas
                </Typography>

                <span>
                    
                </span>
                
            </Toolbar>
            <ModalLogin open={estadoModal} cerrar={cerrarModal} />
            <Drawer
                anchor="left"
                open={estadoMenu}
                onClose={mostrarMenu(false)}
            >
                {menu()}
            </Drawer>
        </AppBar>
    )

}

export default MenuPrincipal
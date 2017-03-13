# INTRODUÇÃO

Shells nada mais são que interpretadores de linhas de comando, a ideia geral é que um shell receba entradas (comandos) e as traduza para ações do Kernel em realação a máquina.
Os shells estão aí desde o início da década de 70 com o surgimento da primeira shell (sh) para o UNIX, ao longo dos anos os mesmos vem se mantendo vivos e evoluindo (bash, csh, ksh, zsh, etc), incorporando novos comandos e novas maneiras de automatizar tarefas, sendo que os mesmos não passam por uma utilização exclusiva e podemos ter múltiplos shells instalados no mesmo sistema operacional, sendo que o padrão escolhido sempre vai ser "linkado" ao  **/bin/sh** (que teoricamente se manteve como o SHELL padrão) para o shell de sua preferência.

Verificar os comando:

```sh
$ chsh
```

E a variável de ambiente **SHELL**:
```sh
$ echo $SHELL
 /bin/bash
```

# EXERCISE
Abrir o terminal de sua preferência e verificar em qual shell você está utilizando! 

## HINTS
O seu shell atual fica guardado dentro da variável de ambiente SHELL, sendo que você pode alterar o shell padrão (deste usuário), usando o comando **chsh**.

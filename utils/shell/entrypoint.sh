#!/bin/sh

# Verzeichnisse definieren
configs="./.default/config"
courses="./.default/courses"
config_mount="./customconfig"
courses_mount="./content/courses"

# Funktion zum Kopieren, wenn Ziel leer ist
copy_if_empty() {
    SRC="$1"
    DEST="$2"
    if [ -d "$DEST" ] && [ -z "$(ls -A "$DEST")" ]; then
        cp -r "$SRC/"* "$DEST/"
        echo "Daten von $SRC nach $DEST kopiert."
    else
        echo "$DEST ist nicht leer, keine Daten kopiert."
    fi
}

copy_if_empty "$configs" "$config_mount"
copy_if_empty "$courses" "$courses_mount"

exec "$@"

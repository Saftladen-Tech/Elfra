#!/bin/sh

configs="./.default/config"
courses="./.default/courses"
config_mount="./customconfig"
courses_mount="./content/courses"

copy_if_empty() {
    SRC="$1"
    DEST="$2"
    if [ -d "$DEST" ] && [ -z "$(ls -A "$DEST")" ]; then
        cp -r "$SRC/"* "$DEST/"
        echo "Copy data from $SRC to $DEST ."
    else
        echo "$DEST is not empty, no data copied."
    fi
}

copy_if_empty "$configs" "$config_mount"
copy_if_empty "$courses" "$courses_mount"

exec "$@"

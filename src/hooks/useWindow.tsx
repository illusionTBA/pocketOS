import React, {useEffect, useState, useCallback} from "react";

type WindowHook {
    create: (title: string, url: string, isProxied: boolean) => void
}

const useWindow = (): WindowHook => {


    const create = (title: string, url: string, isProxied: boolean) => {

    }



    return {create}
}

import {useForm} from "react-hook-form";

import {joiResolver} from "@hookform/resolvers/joi";

import {commentValidator} from "../../../validators/comment.validator";

import {commentService} from "../../../services/comment.service";



const CommentForm = ({setComments}) => {

    const {register, reset, handleSubmit, formState: {errors, isValid}} = useForm({
        resolver: joiResolver(commentValidator),
        mode:"all"

    });

    const submit = (obj) => {
        commentService.createComment(obj).then(({data}) => setComments(comments => [...comments,data]))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)} className={'CommentForm'}>
            <input type={'text'} placeholder={'name'} {...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}
            <input type={'text'} placeholder={'email'}{...register('email')}/>
            {errors.email && <span>{errors.email.message}</span>}
            <button disabled={!isValid}>Submit</button>
        </form>
    );
};

export {CommentForm};